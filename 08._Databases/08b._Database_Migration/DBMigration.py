import mysql.connector
from mysql.connector import errorcode

# Database configuration for source and destination
source_config = {
    "user": "source_user",
    "password": "source_password",
    "host": "source_host",
    "database": "source_database",
}

destination_config = {
    "user": "destination_user",
    "password": "destination_password",
    "host": "destination_host",
    "database": "destination_database",
}


def migrate_data(source_table, destination_table):
    try:
        # Connect to source database
        source_conn = mysql.connector.connect(**source_config)
        source_cursor = source_conn.cursor()

        # Connect to destination database
        destination_conn = mysql.connector.connect(**destination_config)
        destination_cursor = destination_conn.cursor()

        # Fetch data from source table
        source_cursor.execute(f"SELECT * FROM {source_table}")
        rows = source_cursor.fetchall()

        # Get column names from source table
        columns = [i[0] for i in source_cursor.description]

        # Insert data into destination table
        for row in rows:
            placeholders = ", ".join(["%s"] * len(row))
            column_names = ", ".join(columns)
            destination_cursor.execute(
                f"INSERT INTO {destination_table} ({column_names}) VALUES ({placeholders})",
                row,
            )

        # Commit the transaction
        destination_conn.commit()

        print(f"Data migrated from {source_table} to {destination_table} successfully.")

    except mysql.connector.Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
        else:
            print(err)
    finally:
        source_cursor.close()
        source_conn.close()
        destination_cursor.close()
        destination_conn.close()


# Migrate data from source_table to destination_table
migrate_data("source_table", "destination_table")

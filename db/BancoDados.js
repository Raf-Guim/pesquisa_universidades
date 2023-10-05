import * as SQLite from 'expo-sqlite';

const db_connection = SQLite.openDatabase('university_search.db');

export const initialize_db = () => {

    const retorno = new Promise((resolve, reject) => {

        db_connection.transaction((tx) => {

                tx.executeSql('CREATE TABLE IF NOT EXISTS university (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, website TEXT NOT NULL)',
                [],
                () => {
                    resolve();
                },
                (_, error) => reject(error));    
            });
    });

    return retorno;

}

export const insert_university = (name, website) => {

    const retorno = new Promise((resolve, reject) => {

        db_connection.transaction((tx) => {

            tx.executeSql('INSERT INTO university (name, website) VALUES (?, ?)',
            [name, website],
            (_, result) => {
                console.log(result)
                resolve(result);
            },
            (_, error) => reject(error));    
        });
    });

    return retorno;

}

export const fetch_universities = () => {

    const retorno = new Promise((resolve, reject) => {

        db_connection.transaction((tx) => {

            tx.executeSql('SELECT * FROM university',
            null,
            (_, result) => {
                resolve(result.rows._array);
            },
            (_, error) => reject(error));    
        });
    });

    return retorno;

}

export const remove_university = (id) => {

    const retorno = new Promise((resolve, reject) => {

        db_connection.transaction((tx) => {

            tx.executeSql('DELETE FROM university WHERE id = ?',
            [id],
            (_, result) => {
                console.log(result)
                resolve(result);
            },
            (_, error) => reject(error));    
        });
    });

    return retorno;

}
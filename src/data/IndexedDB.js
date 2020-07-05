import Dexie from 'dexie';


const IndexedDB = new Dexie('tarefasDB');
IndexedDB.version(1).stores({tarefas: '++id'});

IndexedDB.open().catch((err) => {
    console.log(err.stack || err)
})

export default IndexedDB;
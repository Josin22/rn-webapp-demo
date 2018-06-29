import Dexie from 'dexie';

const db = new Dexie("Cache_Image_DB");
db.version(1).stores({ file: '++id' });

export const findFiles = async(file) => {
	return db.file
		.filter(item => item.name === file.name)
		.toArray()
}

export const addFile = async(file) => {
	return db.file
		.add(file)
}
export const deleteFile = async(id) => {
	return db.file
		.delete(id)
}

const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWIDGETS_URL),
    appwriteProjectId: String(import.meta.env.VITE_APPWIDGETS_PROJECT_ID),
    appwriteCollectionId: String(import.meta.env.VITE_APPWIDGETS_COLLECTION_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWIDGETS_DATABASE_ID),
    appwriteBucketId: String(import.meta.env.VITE_APPWIDGETS_BUCKET_ID),
}



export default conf
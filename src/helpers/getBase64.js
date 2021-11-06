export const getBase64 = (fileUpload) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileUpload);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}
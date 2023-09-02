// export function toBase64(file: File){
//   return new Promise<string>((resolve,reject)=>{
//     const reader =new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);


//   }
// )}

export function toBase64(file: File): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result);
      } else if (reader.result instanceof ArrayBuffer) {
        const base64String = arrayBufferToBase64(reader.result);
        resolve(base64String);
      } else {
        reject(new Error('Unexpected result type'));
      }
    };
    reader.onerror = (error) => reject(error);
  });
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export const isValidEmail = (email: string): boolean => {
  
    const match = String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  
  export const isEmail = (email: string): string | undefined => {
    return isValidEmail(email) 
      ? undefined
      : 'El correo no parece ser válido';
  }


export const validateData = ( email: string, name: any, message: string ) => {

    const validEmail = email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
    const validName = name.length > 6 ? true : false
    const validMessage = message.length > 10 ? true : false 

    return {
        validEmail,
        validName,
        validMessage
    }
};
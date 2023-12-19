function validateEmail(email) {    
    const requiredAttributes = /\S+@\S+\.\S+/;
    return requiredAttributes.test(email);
  }
  
  function validatePasswordLength(password) {
    const itHasTheMinimumSize = password.length >= 6;
    return itHasTheMinimumSize;
  }
  
  function validateDataToProfile({ name, email, newPassword, oldPassword }) {
    if (!name) {alert('Campo nome vazio!');
      return false;
    }
  
    if (!email) {alert('Campo e-mail vazio!');
      return false;
    }
  
    const isAValidEmail = validateEmail(email);
  
    if (!isAValidEmail) {alert('E-mail inválido!');
      return false;
    }
  
    if (newPassword && !oldPassword) {alert('Informe a senha antiga!');
      return false;
    }
  
    if (newPassword && oldPassword) {
        const isAValidPassword = validatePasswordLength(newPassword);
  
      if (!isAValidPassword) {alert('Senha mínimo 6 caracteres!');
        return false;
      }
    }
  
    return true;
  }
  
  function validateDataToSignUp({ name, email, password }) {
    if (!name) {alert('Campo nome vazio!');
      return false;
    }
  
    if (!email) {alert('Campo e-mail vazio!');
      return false;
    }
  
    const isAValidEmail = validateEmail(email);
  
    if (!isAValidEmail) {alert('E-mail inválido!');  
      return false;
    }
  
    if (!password) {alert('Campo senha vazio!');
      return false;
    }
  
    const isAValidPassword = validatePasswordLength(password);
  
    if (!isAValidPassword) {alert('Senha mínimo 6 caracteres!');
      return false;
    }
    return true;
  }
  
  function validateDataToSignIn({ email, password }) {
    if (!email) {alert('Campo e-mail vazio!');
      return false;
    }
  
    const isAValidEmail = validateEmail(email);
  
    if (!isAValidEmail) {alert('E-mail inválido!');
      return false;
    }
  
    if (!password) {alert('Campo senha vazio!');
      return false;
    }
  
    const isAValidPassword = validatePasswordLength(password);
  
    if (!isAValidPassword) {alert('Senha mínimo 6 caracteres!.')
      return false;
    }
    return true;
  }
  
  export {validateDataToProfile, validateDataToSignIn, validateDataToSignUp};
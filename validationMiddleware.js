const validateFirstName = (firstName) => {
    const regex = /^[A-Z][a-z]+$/;
    return regex.test(firstName);
  };
  
  const validateLastName = (lastName) => {
    const regex = /^[A-Z][a-z]+$/;
    return regex.test(lastName);
  };
  
  const validatePassword = (password) => {
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumeric = /[0-9]/.test(password);
    return hasSpecialChar && hasUppercase && hasNumeric && password.length >= 8;
  };
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\d{10,}$/;
    return regex.test(phoneNumber);
  };
  
  const validationMiddleware = (req, res, next) => {
    const { firstName, lastName, password, email, phoneNumber } = req.body;
  
    if (!validateFirstName(firstName)) {
      return res.status(400).json({ error: 'First name must start with a capital letter and contain only letters.' });
    }
  
    if (!validateLastName(lastName)) {
      return res.status(400).json({ error: 'Last name must start with a capital letter and contain only letters.' });
    }
  
    if (!validatePassword(password)) {
      return res.status(400).json({ error: 'Password must be at least 8 characters long and include one special character, one uppercase letter, and one numeric character.' });
    }
  
    if (!validateEmail(email)) {
      return res.status(400).json({ error: 'Email must be a valid email address.' });
    }
  
    if (!validatePhoneNumber(phoneNumber)) {
      return res.status(400).json({ error: 'Phone number must be at least 10 digits long.' });
    }
  
    next();
  };
  
  export default validationMiddleware;
  
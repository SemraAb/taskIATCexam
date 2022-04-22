const task4 = (str1, str2) => {
    const normalize = str =>
      str
        .toLowerCase()
        .replace(/[^a-z0-9]/gi, '')
        .split('')
        .sort()
        .join('');
    return normalize(str1) === normalize(str2);
  };
  console.log(task4('salam', 'malsa'));
  console.log(task4('sagol', 'salam'));

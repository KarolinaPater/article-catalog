export function validEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return !re.test(email);
  if (!re.test(email)) {
    return "Nieprawidłowy format email";
  } else if (!email.includes("@edu.pl")) {
    return "Tylko dla domeny @edu.pl";
  }
  return null;
}

export function validPassword(password) {
  const valid = password.length > 5 && password.length < 14;
  if (!valid) {
    return "Nieprawidłowe hasło";
  }
  return null;
}

export function validName(name) {
  if (name.length === 0 || !name) {
    return "Pole wymagane";
  }
  if (name.length < 2) {
    return "Minimalna ilość znaków 2";
  }
  if (name.length > 100) {
    return "Maksymalna ilość znaków 100";
  }
  return null;
}

export function validOrcidNumber(orcid_number) {
  if (orcid_number.length != 0 && orcid_number.length != 20) {
    return "Numer ORCID musi zawierać 20 znaków";
  }
  return null;
}
export function validAffiliation(affiliation) {
  if (affiliation.length > 50) {
    return "Za duża ilość znaków";
  }
  return null;
}

export function validRegisterPassword(password) {
  if (password.length === 0 || !password) {
    return "Pole wymagane";
  }
  if (password.length < 6) {
    return "Minimalna ilość znaków 6";
  }
  if (password.length > 14) {
    return "Maksymalna ilość znaków 13";
  }
  if (!password.match(/[0-9]/)) {
    return "Hasło musi zawierać 1 cyfrę";
  }
  if (!password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/)) {
    return "Hasło musi zawierać znak specjalny";
  }

  return null;
}

export function validConfirmPassword(password, confirm_password) {
  if (confirm_password.length === 0 || !confirm_password) {
    return "Pole wymagane";
  }
  if (password !== confirm_password) {
    return "Hasła różnią się od siebie";
  }
  return null;
}

export function validDoi(field) {
  if (field.length === 0 || !field) {
    return "Pole wymagane";
  }
  if (field.length < 10) {
    return "Minimalna ilość znaków 10";
  }
  if (field.length > 20) {
    return "Maksymalna ilość znaków 20";
  }
  if (!field.startsWith("10.")) {
    return "Nieprawidłowy format";
  }

  return null;
}

export function validTheme(field) {
  if (field.length === 0 || !field) {
    return "Pole wymagane";
  }
  if (field.length < 3) {
    return "Minimalna ilość znaków 3";
  }
  if (field.length > 100) {
    return "Maksymalna ilość znaków 100";
  }
  return null;
}

export function validAuthors(field) {
  if (field.length === 0 || !field) {
    return "Pole wymagane";
  }
  if (field.length < 3) {
    return "Minimalna ilość znaków 3";
  }
  if (field.length > 100) {
    return "Maksymalna ilość znaków 100";
  }

  return null;
}

export function validSources(field) {
  if (field.length === 0 || !field) {
    return "Pole wymagane";
  }
  if (field.length < 3) {
    return "Minimalna ilość znaków 3";
  }
  if (field.length > 500) {
    return "Maksymalna ilość znaków 500";
  }

  return null;
}

export function validSummary(field) {
  if (field.length === 0 || !field) {
    return "Pole wymagane";
  }
  if (field.length < 10) {
    return "Minimalna ilość znaków 10";
  }
  if (field.length > 8000) {
    return "Maksymalna ilość znaków 8000";
  }

  return null;
}

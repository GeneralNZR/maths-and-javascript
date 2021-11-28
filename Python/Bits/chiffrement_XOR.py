def chiffrement_XOR(str1: str, str2: str) -> str:
    """
    Description:
        Chiffrement de texte par OU exclusif (XOR).
        Le codage est effectué par une opération XOR sur deux chaînes de caractères données. 
        Si les chaînes sont de longueurs différentes, la sortie sera la longueur de la chaîne la plus courte.
        Chaque caractère est codé en hexadécimal.

    Paramètres:
        str1: {str} -- Premier texte à chiffrer
        str2: {str} -- Second texte à chiffrer

    Retourne:
        {str} -- Texte chiffré

    Exemple:
        >>> chiffrement_XOR("abcdef", "0123456789")
        aaeeaa

        >>> chiffrement_XOR("9344637f8475f2d", "f954fb6942026a4ea")
        6a109816c677989

        Le codage est effectué par une opération XOR sur deux chaînes de caractères données. 
        Si les chaînes sont de longueurs différentes, la sortie sera la longueur de la chaîne la plus courte.
        Chaque caractère est codé en hexadécimal.
        Pour 'abcdef': 10, 11, 12, 13, 14, 15 (string min, 6 caractères) 
        Pour '012345': 0, 1, 2, 3, 4, 5 (6 caractères)
        Pour '9344637f8475f2d': 9, 3, 4, 4, 6, 3, 7, 15, 8, 4, 7, 5, 15, 2, 13 (string min, 15 caractères)
        Pour 'f954fb6942026a4': 15, 9, 5, 4, 15, 11, 6, 9, 4, 2, 0, 2, 6, 10, 4 (15 caractères)
    """
    if len(str1) > len(str2):
        str1 = str1[:len(str2)]
    elif len(str2) > len(str1):
        str2 = str2[:len(str1)]
    return hex(int(str1, 16) ^ int(str2, 16))[2:]

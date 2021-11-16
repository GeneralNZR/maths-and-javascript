def estPair(n: int) -> bool:
    """
    Description:
        Vérifie si un nombre est pair ou non.
    
    Paramètres:
        n: {int} -- Le nombre à vérifier.
    
    Retourne:
        {bool} -- True si le nombre est pair, False sinon.

    Exemple:
        >>> estPair(6)
        True

        >>> estPair(11)
        False

        00000000000000000000000000000000 32 bits
        00000000000000000000000000000001 1 bit, représente 2^0 soit 1
        les nombres pairs sont des nombres avec un bit à 0 à la fin
        pour tout n qui est un entier positif, (n % 2) + 1 est un nombre impair.
    """
    return n & 1 == 0
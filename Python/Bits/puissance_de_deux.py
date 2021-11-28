def puissance_de_deux(n: int) -> bool:
    """
    Description:
        Vérifier si un nombre est une puissance de deux
    
    Paramètres:
        n: {int} -- Nombre à vérifier
    
    Retourne:
        {bool} -- True si n est une puissance de deux, False sinon
    
    Exemple:
        >>> puissance_de_deux(8)
        True

        >>> puissance_de_deux(7)
        False

    On prend un nombre entier n, on vérifie si n & (n - 1) est égal à 0.
    Si c'est le cas, alors n est un nombre de puissance de deux.
    8 => 00000000000000000000000000001000
    7 => 00000000000000000000000000000111
    (décimal => binaire)
    8 & (8 - 1) = 0, donc 8 est un nombre de puissance de deux.
    """
    return n & (n - 1) == 0

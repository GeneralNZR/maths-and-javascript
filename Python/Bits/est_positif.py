def est_positif(n: int) -> bool:
    """
    Description:
        Vérifie si un nombre est positif.
    
    Paramètres:
        n: {int} -- Nombre à vérifier
    
    Retourne:
        {bool} -- True si positif, false sinon

    Exemple:
        >>> est_positif(1)
        True

        >>> est_positif(-1)
        False

        10000000000000000000000000000000 équivaut à 2^31 soit 2_147_483_648
        11111111111111111111111111111111 équivaut à 2^31-1 soit 2_147_483_647
    """
    return n >> 31 == 0
def n_puissance_n(n: int, p: int) -> bool:
    """
    Description:
        Fonction pour verifier si un nombre est n-puissance de n

    Paramètres:
        n: {int} -- Nombre à verifier
        p: {int} -- Nombre de puissance

    Retourne:
        {bool} -- True si le nombre est n-puissance de n, False sinon
    
    Exemple:
        >>> n_puissance_n(3125, 5)
        True
    """
    return n == p ** p
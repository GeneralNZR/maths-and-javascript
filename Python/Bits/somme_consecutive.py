def somme_consecutive(n: int) -> bool:
    """
    Description:
        Verifie si un nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs.
    
    Paramètres:
        n: {int} -- Le nombre à tester.
    
    Retourne:
        {bool} -- True si le nombre peut être exprimé en somme de deux ou plusieurs nombres entiers positifs consecutifs, False sinon.
    
    Exemple:
        >>> somme_consecutive(10)
        True

        >>> somme_consecutive(64)
        False

        La fonction bool() retourne la valeur booléenne d'un objet.
    """
    return bool(n & (n - 1))
def tableauDeMultiples(n: int, limite: int) -> list:
    """
    Description:
        Trouver les multiples d'un nombre entier positif jusqu'à une limite donnée.

    Arguments:
        n: {int} -- Le nombre entier positif.
        limite: {int} -- La limite.
    
    Return:
        {list} -- La liste des multiples de n.

    Exemple:
        >>> tableauDeMultiples(5, 10)
        [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    """
    return list(range(n, (limite+1)*n, n))
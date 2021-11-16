def getBit(n: int, i: int) -> int:
    """
    Description: 
        Récupère le i-ème bit de n.
    
    Paramètres:
        n: {int} -- Le nombre à traiter
        i: {int} -- L'index du bit à récupérer

    Retour:
        {int} -- 0 ou 1

    Exemple:
        >>> getBit(2, 0)
        0

        >>> getBit(2, 1)
        1    
    """
    return (n >> i) & 1
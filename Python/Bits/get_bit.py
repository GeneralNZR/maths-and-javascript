def get_bit(n: int, i: int) -> int:
    """
    Description: 
        Récupère le i-ème bit de n.
    
    Paramètres:
        n: {int} -- Le nombre à traiter
        i: {int} -- L'index du bit à récupérer

    Retourne:
        {int} -- 0 ou 1

    Exemple:
        >>> get_bit(2, 0)
        0

        >>> get_bit(2, 1)
        1    
    """
    return (n >> i) & 1
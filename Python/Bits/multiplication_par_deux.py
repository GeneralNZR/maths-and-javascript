def multiplication_par_deux(n: int) -> int:
    """
    Description:
        Multiplication d'un nombre par deux.

    Paramètres:
        n: {int} -- Nombre à multiplier par deux
    
    Retourne:
        {int} -- Nombre multiplié par deux
    
    Exemple:
        >>> multiplication_par_deux(5)
        10

        On décale les bits de n de 1 vers la gauche grâce à l'opérateur (<<).
        5 => 0101, 10 => 1010 (décimal => binaire)
    """
    return n << 1
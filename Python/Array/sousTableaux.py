def sousTableaux(arr: list, n: int) -> list:
    """
    Description:
        Découper un tableau en sous-tableaux.

    Arguments:
        arr: {list} -- Tableau à découper
        n: {int} -- Nombre d'éléments par sous-tableau

    Return:
        {list} -- Liste de sous-tableaux

    Exemple:
        >>> sousTableaux([0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 3)
        [[0, 0, 0], [1, 0, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1], [0, 0, 1]]
    """
    if n <= 0:
        return []
    if len(arr) < n:
        return []
    return [arr[i:i + n] for i in range(0, len(arr), n)]
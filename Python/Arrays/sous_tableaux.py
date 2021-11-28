def sous_tableaux(arr: list, n: int) -> list:
    """
    Description:
        Découper un tableau en sous-tableaux.

    Paramètres:
        arr: {list} -- Tableau à découper
        n: {int} -- Nombre d'éléments par sous-tableau

    Retourne:
        {list} -- Liste de sous-tableaux

    Exemple:
        >>> sous_tableaux([0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1], 3)
        [[0, 0, 0], [1, 0, 0], [1, 1, 0], [1, 1, 1], [0, 1, 1], [0, 0, 1]]
    """
    if n <= 0:
        return []
    if len(arr) < n:
        return []
    return [arr[i:i + n] for i in range(0, len(arr), n)]
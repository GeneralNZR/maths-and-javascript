def isolerElements(arr: list, sub: list, e: int) -> list:
    """
    Description:
        Isoler les éléments doublons d'un tableau dans un autre, sans changer l'ordre des éléments.
    
    Arguments:
        arr: {list} -- Tableau d'entiers.
        sub: {list} -- Tableau d'entiers.
        e: {int} -- Entier.

    Return:
        {list} -- Tableau d'entiers.
    
    Exemple:
        >>> isolerElements([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1], [], 1)
        [[0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1]]
    """
    for i in range(len(arr)):
        if arr[i] == e:
            sub.append(arr[i])
            arr[i] = None
    while None in arr:
        arr.remove(None)
    return [arr, sub]
def cloner_tableau(arr: list) -> list:
    """
    Description:
        Permet de cloner un tableau dans un tableau.
        L'opérateur ( * ) permet de déballer un itérable pour en créer un nouveau.

    Paramètres:
        arr: {list} -- Tableau à cloner.
    
    Retourne:
        {list} -- le tableau cloné.

    Exemple:
        >>> arr = [0, 0, 0]]
        >>> cloner_tableau(arr)
        [0, 0, 0, [0, 0, 0]]
    """
    return [*arr, arr]
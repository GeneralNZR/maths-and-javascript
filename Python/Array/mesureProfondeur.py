def mesureProfondeur(arr: list) -> int:
    """
    Description:
        Permet de mesurer la profondeur d'un tableau.

        [] => 1, [[]] => 2, [[[]]] => 3, [[[[]]]] => 4, etc.

        Méthode récursive.

    Arguments:
        arr: {list} -- Tableau à mesurer. 

    Return:
        {int} -- Profondeur du tableau.

    Exemple:
        >>> mesureProfondeur([])
        1
        >>> mesureProfondeur([[[[[[[[[[]]]]]]]]]])
        10
    """
    return 1 + mesureProfondeur(arr[0]) if len(arr) > 0 else 1

def mesureProfondeur2(arr: list) -> int:
    """
    Description:
        Permet de mesurer la profondeur d'un tableau.
        
        [] => 1, [[]] => 2, [[[]]] => 3, [[[[]]]] => 4, etc.

        Méthode itérative.

    Arguments:
        arr: {list} -- Tableau à mesurer. 

    Return:
        {int} -- Profondeur du tableau.

    Exemple:
        >>> mesureProfondeur2([])
        1
        >>> mesureProfondeur2([[[[[[[[[[]]]]]]]]]])
        10
    """
    profondeur = 1
    while len(arr) > 0:
        arr = arr[0]
        profondeur += 1
    return profondeur
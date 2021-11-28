def mesure_profondeur(arr: list) -> int:
    """
    Description:
        Permet de mesurer la profondeur d'un tableau.

        [] => 1, [[]] => 2, [[[]]] => 3, [[[[]]]] => 4, etc.

        Méthode récursive.

    Paramètres:
        arr: {list} -- Tableau à mesurer. 

    Retourne:
        {int} -- Profondeur du tableau.

    Exemple:
        >>> mesure_profondeur([])
        1
        >>> mesure_profondeur([[[[[[[[[[]]]]]]]]]])
        10
    """
    return 1 + mesure_profondeur(arr[0]) if len(arr) > 0 else 1

def mesure_profondeur2(arr: list) -> int:
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
        >>> mesure_profondeur2([])
        1
        >>> mesure_profondeur2([[[[[[[[[[]]]]]]]]]])
        10
    """
    profondeur = 1
    while len(arr) > 0:
        arr = arr[0]
        profondeur += 1
    return profondeur
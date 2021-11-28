def moyenne(arr: list) -> float:
    """
    Description:
        Fonction qui calcule la moyenne d'un tableau.

    Paramètres:
        arr: {list} -- Tableau à traiter

    Retourne:
        {float} -- Moyenne du tableau

    Exemple:
        >>> moyenne([1, 3, 3, 7])
        3.5
    """
    return sum(arr) / len(arr)

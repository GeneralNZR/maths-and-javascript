def valeur_absolue(n: float) -> float:
    """
    Description:
        Cette fonction calcule la valeur absolue d'un nombre.

        Derrière la fonction abs() se cache: n if n >= 0 else -n
        On peut remarquer que abs(n) == max(n, -n)

    Paramètres:
        n: {float} -- Le nombre dont on veut calculer la valeur absolue.
    
    Retourne:
        {float} -- La valeur absolue du nombre.
    
    Exemple:
        >>> valeur_absolue(-1)
        1
        >>> valeur_absolue(-0.5)
        0.5
    """
    return abs(n)

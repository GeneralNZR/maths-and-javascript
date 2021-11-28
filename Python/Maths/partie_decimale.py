def partie_decimale(n: float) -> int:
    """
    Description:
        Fonction qui permet d'isoler la partie décimale d'un nombre.
    
    Paramètres:
        n: {float} -- Le nombre dont on veut isoler la partie décimale.
    
    Retourne:
        {int} -- La partie décimale du nombre.

    Exemple:
        >>> partie_decimale(111.222)
        222
    """
    return str(n).split(".")[1]
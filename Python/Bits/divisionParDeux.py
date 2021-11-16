# Division d'un nombre par deux
def divisionParDeux(n: int) -> int:
    """
    Description:
        Fonction qui divise un nombre par deux, grace à l'opérateur de décalage binaire à droite (>>).

    Paramètres:
        n: {int} -- Le nombre à diviser par deux.

    Retourne:
        {int} -- Le résultat de la division par deux.
    
    Exemple:
        >>> divisionParDeux(10)
        5

        00000000000000000000000000001010 représente 10, soit 2^3 + 0 + 2^1 + 0
        00000000000000000000000000000101 représente 5, soit 2^1 + 0 + 2^0
    """
    return n >> 1

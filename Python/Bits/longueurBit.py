# Renvoie le nombre de bits utilisés dans la représentation binaire du nombre
def longueurBit(n: int) -> int:
    """
    Description:
        Renvoie le nombre de bits utilisés dans la représentation binaire d'un nombre entier.
    
    Paramètres:
        n: {int} -- Le nombre entier dont on veut connaître la longueur de sa représentation binaire.

    Retourne:
        {int} -- Le nombre de bits utilisés dans la représentation binaire du nombre.
    
    Exemple:
        >>> longueurBit(1)
        1

        >>> longueurBit(8)
        4

        >>> longueurBit(512)
        10

        1 => 1, 8 => 1000, 512 => 1000000000 (décimal => binaire)
    """
    nbBit = 0
    while n > 0:
        nbBit += 1
        n = n >> 1
    return nbBit
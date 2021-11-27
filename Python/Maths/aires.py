from math import pi, sqrt
"""
Description:
    Différentes fonctions de calcul de l'aire de différentes figures.

Auteur:
    Noam Zeitoun

Version:
    1.0
"""

def airephère(r: float) -> float:
    """
    Description:
        Fonction qui calcule l'aire d'une sphère.
    
    Paramètres:
        r: {float} -- Le rayon de la sphère.
    
    Retourne:
        {float} -- L'aire de la sphère.

    Exemple:
        >>> airephère(3)
        113.09733552923255
    """
    return 4 * pi * (r ** 2)


def aireCube(c: float) -> float:
    """
    Description:
        Fonction qui calcule l'aire d'un cube.
    
    Paramètres:
        c: {float} -- La longueur d'un côté du cube.
    
    Retourne:
        {float} -- L'aire du cube.

    Exemple:
        >>> aireCube(3)
        54
    """
    return 6 * (c ** 2)

def aireCylindre(r: float, h: float) -> float:
    """
    Description:
        Fonction qui calcule l'aire d'un cylindre.
    
    Paramètres:
        r: {float} -- Le rayon du cylindre.
        h: {float} -- La hauteur du cylindre.
    
    Retourne:
        {float} -- L'aire du cylindre.

    Exemple:
        >>> aireCylindre(3, 3)
        113.09733552923255
    """
    return 2 * pi * r * h + (2 * pi * (r ** 2))

def aireCone(r: float, h: float) -> float:
    """
    Description:
        Fonction qui calcule l'aire d'un cone.
    
    Paramètres:
        r: {float} -- Le rayon du cone.
        h: {float} -- La hauteur du cone.
    
    Retourne:
        {float} -- L'aire du cone.

    Exemple:
        >>> aireCone(3, 3)
        68.26028032573343
    """
    return pi * r * (r + sqrt(h ** 2 + r ** 2))

def aireTore(r: float, R: float) -> float:
    """
    Description:
        Fonction qui calcule l'aire d'un tore.
    
    Paramètres:
        r: {float} -- Le rayon du tore.
        R: {float} -- Le rayon du tube.
    
    Retourne:
        {float} -- L'aire du tore.

    Exemple:
        >>> aireTore(3, 3)
        355.3057584392169
    """
    return 4 * pi ** 2 * r * R

# TESTS
table_data = [
    ['aireSphère(3)', 'aireCube(3)', 'aireCylindre(3, 3)', 'aireCone(3, 3)', 'aireTore(3, 3)'],
    [airephère(3), aireCube(3), aireCylindre(3, 3), aireCone(3, 3), aireTore(3, 3)],
]
for row in table_data:
    print("{: <20} {: <20} {: <20} {: <20} {: <20}".format(*row))
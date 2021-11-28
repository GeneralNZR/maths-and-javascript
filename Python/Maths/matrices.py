"""
Description:
    Différentes fonctions pour manipuler des matrices.

Auteur:
    Noam Zeitoun

Version:
    1.0
"""

def matrice_identite(n: int) -> list:
    """
    Description:
        Crée une matrice identité de taille n.
    
    Paramètres:
        n: {int} -- Taille de la matrice.

    Retourne:
        {list} -- Matrice identité de taille n.

    Exemple:
        >>> matrice_identite(3)
        [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
    """
    matrice = []
    for i in range(n):
        matrice.append([])
        for j in range(n):
            if i == j:
                matrice[i].append(1)
            else:
                matrice[i].append(0)
    return matrice

def dimension_matrice(matrice: list, n: int) -> bool:
    """
    Description:
        Vérifie si la matrice est de taille n.
    
    Paramètres:
        matrice: {list} -- Matrice à vérifier.
        n: {int} -- Taille de la matrice.

    Retourne:
        {bool} -- True si la matrice est de taille n, False sinon.
            
    Exemple:
        >>> dimension_matrice([[0, 0, 0], [0, 0, 0], [0, 0, 0]], 3)
        True
    """
    if len(matrice) == n and len(matrice[0]) == n:
        return True
    else:
        return False

# TESTS
print(
    'matrice_identite(3)'+' ----------------------------> ', matrice_identite(3),
    '\ndimension_matrice(matrice_identite(3), 3)'+' ------> ', dimension_matrice(matrice_identite(3), 3)
)
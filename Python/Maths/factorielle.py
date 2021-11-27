def factorielle_rec(n: int) -> int:
    """
    Description:
        Factorielle méthode récursive
    
    Paramètres:
        n: {int} -- Nombre à factorielle
    
    Retourne:
        {int} -- Factorielle de n
    
    Exemple:
        >>> factorielle_rec(100)
        9.332622e+157

        Pour l'écriture scientifique: f"{factorielle_rec(100):e}"
    """
    return 1 if n == 0 else n * factorielle_rec(n - 1)

def factorielle_it(n: int) -> int:
    """
    Description:
        Factorielle méthode itérative
    
    Paramètres:
        n: {int} -- Nombre à factorielle
    
    Retourne:
        {int} -- Factorielle de n
    
    Exemple:
        >>> factorielle_it(100)
        9.332622e+157

        Pour l'écriture scientifique: f"{factorielle_it(100):e}"
    """
    result = 1
    for i in range(1, n + 1):
        result *= i
    return result
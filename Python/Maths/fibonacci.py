def fib(n: int) -> int:
    """
    Description:
        Calcule la valeur de la séquence de Fibonacci à la position n, méthode récurs.
    
    Paramètres:
        n: (int) -- Position de la séquence de Fibonacci.
    
    Retourne:
        {int} -- Valeur de la séquence de Fibonacci à la position n.
    
    Exemples:
        >>> fib(20)
        6765
    """
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
    
def fib_iter(n: int) -> int:
    """
    Description:
        Calcule la valeur de la séquence de Fibonacci à la position n, méthode itérative.
    
    Paramètres:
        n: (int) -- Position de la séquence de Fibonacci.
    
    Retourne:
        {int} -- Valeur de la séquence de Fibonacci à la position n.
    
    Exemples:
        >>> fib_iter(20)
        6765
    """
    x,y = 0, 1
    for i in range(n):
        x,y = y, x + y
    return x

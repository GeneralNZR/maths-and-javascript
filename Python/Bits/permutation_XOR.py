def permutation_XOR(x: int, y: int) -> list:
    """
    Description:
        Algorithme pour échanger les valeurs de deux variables sans utiliser la variable temporaire qui est normalement requise avec l'opérateur (^) OU exclusif (XOR).

    Paramètres:
        x: {int} -- Première variable.
        y: {int} -- Deuxième variable.

    Retourne:
        {list} -- Le résultat de l'opération.

    Exemple:
        >>> permutation_XOR(0, 1)
        [1, 0]

        >>> permutation_XOR(1, 0)
        [0, 1]

        ┌───┬───┬───────┐
        │ x │ y │ x ^ y │
        ├───┼───┼───────┤
        │ 0 │ 0 │   0   │
        ├───┼───┼───────┤
        │ 1 │ 1 │   0   │
        ├───┼───┼───────┤
        │ 0 │ 1 │   1   │
        ├───┼───┼───────┤
        │ 1 │ 0 │   1   │
        └───┴───┴───────┘
    """
    return [x ^ x ^ y, y ^ y ^ x]

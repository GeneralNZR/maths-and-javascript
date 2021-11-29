module PermutationXor (permutationXor) where

import Data.Bits (xor)

{-| Algorithme pour échanger les valeurs de deux variables en utilisant 
    une permutation avec l'opérateur (xor).

    Inputs: Int - Première variable
            Int - Deuxième variable

    Output: [Int] - Liste des valeurs des variables après permutation

-}
permutationXor :: Int -> Int -> [Int]
permutationXor x y = [xor (xor x x) y, xor (xor y y) x]
-- Autre notation: [x `xor` x `xor` y, y `xor` y `xor` x]

main :: IO ()
main = do
    mapM_
        (\(x, y) -> putStrLn $ "permutationXor " ++ show (x,y) ++ " -> " ++ show (permutationXor x y))
        [(x, y) | x <- [1..10], y <- [0]]
{-^ Output:
    permutationXor (1,0)  -> [0,1]
    permutationXor (2,0)  -> [0,2]
    permutationXor (3,0)  -> [0,3]
    permutationXor (4,0)  -> [0,4]
    permutationXor (5,0)  -> [0,5]
    permutationXor (6,0)  -> [0,6]
    permutationXor (7,0)  -> [0,7]
    permutationXor (8,0)  -> [0,8]
    permutationXor (9,0)  -> [0,9]
    permutationXor (10,0) -> [0,10]
-}
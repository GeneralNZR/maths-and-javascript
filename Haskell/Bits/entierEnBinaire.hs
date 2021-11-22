module EntierEnBinaire (entierEnBinaire) where

import Data.Bits (shiftR, (.&.))
{-| Fonction qui convertit un entier en binaire.
    (x .&. 1) pour récupérer le bit de poids faible.
    On ajoute 10 à x pour que le résultat soit toujours un entier, 
    et on applique la fonction récursive sur le reste de x, en divisant par 2.

    Input:  Int

    Output: Int
-}
entierEnBinaire :: Int -> Int
entierEnBinaire 0 = 0
entierEnBinaire x = (x .&. 1) + 10 * entierEnBinaire (shiftR x 1)

-- TEST
main :: IO ()
main = do
    mapM_ 
        (\x -> putStrLn $ show x ++ " -> " ++ show (entierEnBinaire x))
        [0..10]
{-^ Output:
    0  -> 0
    1  -> 1
    2  -> 10
    3  -> 11
    4  -> 100
    5  -> 101
    6  -> 110
    7  -> 111
    8  -> 1000
    9  -> 1001
    10 -> 1010
-}
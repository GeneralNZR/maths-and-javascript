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
        (\x -> putStrLn $ "entierEnBinaire " ++ show x ++ " -> " ++ show (entierEnBinaire x))
        [0..10]
{-^ Output:
    entierEnBinaire 0 -> 0
    entierEnBinaire 1 -> 1
    entierEnBinaire 2 -> 10
    entierEnBinaire 3 -> 11
    entierEnBinaire 4 -> 100
    entierEnBinaire 5 -> 101
    entierEnBinaire 6 -> 110
    entierEnBinaire 7 -> 111
    entierEnBinaire 8 -> 1000
    entierEnBinaire 9 -> 1001
    entierEnBinaire 10 -> 1010
-}
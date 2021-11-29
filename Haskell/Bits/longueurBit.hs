module LongueurBit (longueurBit) where

import Data.Bits (shiftR)

{-| Renvoie le nombre de bits utilisés dans la représentation binaire d'un nombre entier.

    Input: Int - Le nombre entier dont on veut connaître la longueur de sa représentation binaire.

    Output: Int - Le nombre de bits utilisés.
-}

-- methode itérative sans rappeler la fonction
longueurBit :: Int -> Int
longueurBit 0 = 0
longueurBit n = 1 + longueurBit (shiftR n 1)

-- TEST
main :: IO ()
main = do
    mapM_ (
        (\x -> putStrLn $ "longueurBit " ++ show x ++ " -> " ++ show (longueurBit x)) . (2^))
        [0..9]
{-^ Output:
    longueurBit 1   -> 1
    longueurBit 2   -> 2
    longueurBit 4   -> 3
    longueurBit 8   -> 4
    longueurBit 16  -> 5
    longueurBit 32  -> 6
    longueurBit 64  -> 7
    longueurBit 128 -> 8
    longueurBit 256 -> 9
    longueurBit 512 -> 10
-}
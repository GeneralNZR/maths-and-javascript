module GetBit (getBit) where

import Data.Bits (shiftR, (.&.))

{-| Fonction qui récupère le i-ième bit de n.

    Inputs: Int - Nombre à découper
            Int - Position du bit à récupérer

    Output: Bool - Bit à la position i (0 ou 1)
-}
getBit :: Int -> Int -> Int
getBit n i = (n `shiftR` i) .&. 1

-- TEST
main :: IO ()
main = do
    mapM_
        (\(n, i) -> putStrLn $ "getBit " ++ show n ++ " pour i = " ++ show i ++ " -> " ++ show (getBit n i))
        [(n, i) | n <- [1..10], i <- [0]]
{-^ Output:
    getBit 1  pour i = 0 -> 1
    getBit 2  pour i = 0 -> 0
    getBit 3  pour i = 0 -> 1
    getBit 4  pour i = 0 -> 0
    getBit 5  pour i = 0 -> 1
    getBit 6  pour i = 0 -> 0
    getBit 7  pour i = 0 -> 1
    getBit 8  pour i = 0 -> 0
    getBit 9  pour i = 0 -> 1
    getBit 10 pour i = 0 -> 0
-}
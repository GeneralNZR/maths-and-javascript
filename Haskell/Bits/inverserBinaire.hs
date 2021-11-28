module InverserBinaire (inverserBinaire) where

{-| Une fonction qui prend en paramètre un entier positif et qui retourne
    la représentation binaire de cet entier.

    Input: Int - Nombre à convertir en binaire

    Output: String - La représentation binaire du nombre, retournée.
-}
inverserBinaire :: Int -> String
inverserBinaire n = inverserBinaire' n ""


inverserBinaire' :: Int -> String -> String
inverserBinaire' 0 s = s
inverserBinaire' n s = inverserBinaire' (div n 2) (s ++ show (mod n 2))

-- TEST
main :: IO ()
main = do
    mapM_
        (\x -> putStrLn $ "inverserBinaire " ++ show x ++ " -> " ++ inverserBinaire x)
        [2..11]
{-^ Output:
    inverserBinaire 2 -> 01
    inverserBinaire 3 -> 11
    inverserBinaire 4 -> 001
    inverserBinaire 5 -> 101
    inverserBinaire 6 -> 011
    inverserBinaire 7 -> 111
    inverserBinaire 8 -> 0001
    inverserBinaire 9 -> 1001
    inverserBinaire 10 -> 0101
    inverserBinaire 11 -> 1101
-}
module EstPositif (estPositif) where

import Data.Bits (shiftR, (.&.))

estPositif :: Int -> Bool
estPositif x = shiftR x 31 == 0

main :: IO ()
main = do
    mapM_
        (\x -> putStrLn $ show x ++ ": " ++ show (estPositif x))
        [-5..4]
{-^ Output:
   -5 -> False
   -4 -> False
   -3 -> False
   -2 -> False
   -1 -> False
    0 -> True
    1 -> True
    2 -> True
    3 -> True
-}
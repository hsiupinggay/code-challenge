SELECT trades.address FROM trades
INNER JOIN balances
ON balances.address = trades.address
WHERE trades.block_height > 730000
AND (balances.amount * 
(CASE balances.denom
WHEN 'usdc' THEN 0.000001
WHEN 'swth' THEN 0.00000005
WHEN 'tmz' THEN 0.003
ELSE 0
END)) >= 500
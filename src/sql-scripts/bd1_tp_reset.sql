-- RESET --

use bd1_tp;
set foreign_key_checks = 0;
drop table estabelecimento;
drop table vendedor;
drop table carro;
drop table cliente;
drop table aluguel;
set foreign_key_checks = 1;
commit;
use bd1_tp;

-- CREATE --

create table estabelecimento (
    idestabelecimento numeric,
    primary key (idestabelecimento),
    endereco varchar(40) not null
);

create table vendedor (
    idestabelecimento numeric,
    foreign key (idestabelecimento)
        references estabelecimento (idestabelecimento),
    cpf numeric(11),
    primary key (cpf),
    nome varchar(40) not null,
    numvendas numeric default 0 not null,
    salariobase varchar(40) not null,
    incrementosalario numeric(3 , 2 ) default 1 not null,
    check (incrementosalario <= 1.5)
);

create table carro (
    idestabelecimento numeric,
    foreign key (idestabelecimento)
        references estabelecimento (idestabelecimento),
    placa varchar(7),
    constraint pk_carro primary key (placa),
    custodia numeric(6 , 2 ) not null,
    modelo varchar(40) not null,
    cor varchar(40)
);

create table cliente (
    cpf numeric(11),
    primary key (cpf),
    nome varchar(40) not null,
    idade numeric not null,
    check (idade >= 18)
);

create table aluguel (
    idaluguel int auto_increment,
    primary key (idaluguel),
    ativo varchar(1) default 'S',
    check (ativo in ('S', 'N')),
    datainicio date default null,
    datafim date default null,
    valorbase numeric(10 , 2 ) not null,
    check (valorbase >= 100),
    valorfinal numeric(10 , 2 ) default null,
    cpfvendedor numeric(11),
    foreign key (cpfvendedor)
        references vendedor (cpf),
    cpfcliente numeric(11),
    foreign key (cpfcliente)
        references cliente (cpf),
    placacarro varchar(7),
    foreign key (placacarro)
        references carro (placa)
);

commit;

-- TRIGGERS ---

drop trigger if exists iniciaAluguel;
drop trigger if exists encerraAluguel;
drop trigger if exists calcIncremento;

DELIMITER $$
create trigger iniciaAluguel
before insert on aluguel
for each row 
begin 
    if (new.cpfcliente, new.placacarro) not in (select cpfcliente, placacarro from aluguel where ativo = 'S') then
			set new.datainicio = date(now());
	else
		signal sqlstate '45000' set message_text = 'INVALIDO: CPF ou Carro indisponiveis para novo aluguel';
    end if;
end; 
$$

DELIMITER $$
create trigger encerraAluguel
before update on aluguel
for each row 
begin 
    declare dias numeric default 0;
    declare valorintermediario numeric(10, 2) default 0;
	declare multa numeric(10, 2) default 0;
	if new.ativo = 'N' then
		set new.datafim = date(now());
		set dias = datediff(new.datafim, new.datainicio);
		set valorintermediario = new.valorbase + (dias*(select custodia from carro where placa = new.placacarro));
		if dias > 365 then
			set multa = ceil((dias - 365)/30)*(valorintermediario/4);
		end if;
		set new.valorfinal = valorintermediario + multa;
	end if;
end; 
$$

DELIMITER $$
create trigger calcIncremento
before update on vendedor
for each row
begin
	if old.numvendas <> new.numvendas then
		set new.incrementosalario = 1 + (floor(new.numvendas/25) * 0.01);
	end if;
end;
$$
DELIMITER ;

commit;

-- INSERT --

insert into estabelecimento values(1, 'End. 1');
-- insert into estabelecimento values(2, 'End. 2');
-- insert into estabelecimento values(3, 'End. 3');
-- insert into estabelecimento values(4, 'End. 4');
-- insert into estabelecimento values(5, 'End. 5');

insert into vendedor(idestabelecimento, cpf, nome, salariobase) values(1, 12345678900, 'Nome 0', 10);
insert into vendedor(idestabelecimento, cpf, nome, salariobase) values(1, 12345678901, 'Nome 1', 20);
insert into vendedor(idestabelecimento, cpf, nome, salariobase) values(1, 12345678902, 'Nome 2', 30);
-- insert into vendedor(idestabelecimento, cpf, nome, salariobase) values(2, 12345678903, 'Nome 3', 40);
-- insert into vendedor(idestabelecimento, cpf, nome, salariobase) values(3, 12345678904, 'Nome 4', 50);

insert into carro(idestabelecimento, placa, custodia, modelo, cor) values(1, '1234567', 20, 'Mod. 0', 'Cor 0');
insert into carro(idestabelecimento, placa, custodia, modelo) values(1, '2345678', 40, 'Mod. 1');
insert into carro(idestabelecimento, placa, custodia, modelo, cor) values(1, '3456789', 80, 'Mod. 2', 'Cor 1');
-- insert into carro(idestabelecimento, placa, custodia, modelo) values(2, '4567890', 160, 'Mod. 3');
-- insert into carro(idestabelecimento, placa, custodia, modelo, cor) values(3, '5678901', 320, 'Mod. 4', 'Cor 2');

insert into cliente values('12345678905', 'Nome 5', 18);
insert into cliente values('12345678906', 'Nome 6', 19);
insert into cliente values('12345678907', 'Nome 7', 20);
insert into cliente values('12345678908', 'Nome 8', 21);
insert into cliente values('12345678909', 'Nome 9', 22);

-- insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(100, 12345678900, 12345678905, '1234567');
-- insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(200, 12345678900, 12345678906, '2345678');
-- insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(400, 12345678901, 12345678907, '3456789');
-- insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(800, 12345678902, 12345678908, '4567890');
-- insert into aluguel(valorbase, cpfvendedor, cpfcliente, placacarro) values(1600, 12345678904, 12345678909, '5678901');

commit;
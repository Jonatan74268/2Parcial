import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';
import CampeonRepository from './CampeonRepository';
import respond from './respond';
import Campeon from './domain-layer/entities/Campeon';

const app = express();

app.use(json());
app.use(cors());

// listar campeones
app.get('/campeones', (req, res) => {
  const campeonRepository = new CampeonRepository();

  const campeones = campeonRepository.list();

  respond(res, 200, campeones);
});

// obtener una campeon por id
app.get('/campeones/:id', (req, res) => {
  const id = req.params.id;

  const campeonRepository = new CampeonRepository();

  const campeon = campeonRepository.get(id);

  if (!campeon) {
    respond(res, 404);

    return;
  }

  respond(res, 200, campeon);
});

app.post('/campeones', (req, res) => {
  const campeon = new Campeon(req.body.id, req.body.nombre, req.body.alias, req.body.rol, req.body.dificultad, req.body.historia, req.body.imagen);

  const campeonRepository = new CampeonRepository();
  campeonRepository.add(campeon);

  respond(res, 200, campeon);
});

app.put('/campeones', (req, res) => {
  const campeon = new Campeon(req.body.id, req.body.nombre, req.body.alias, req.body.rol, req.body.dificultad, req.body.historia, req.body.imagen);

  const campeonRepository = new CampeonRepository();
  campeonRepository.update(campeon);

  respond(res, 200, campeon);
});

app.delete('/campeones/:id', (req, res) => {
  const id = req.params.id;

  const campeonRepository = new CampeonRepository();
  campeonRepository.delete(id);

  respond(res, 200);
});

app.listen(3000, () => {
  console.log('App started on port 3000');
});

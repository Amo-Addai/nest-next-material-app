import { Injectable } from '@nestjs/common';
import { CreateSampleInput } from './dto/create-sample.input';
import { UpdateSampleInput } from './dto/update-sample.input';

@Injectable()
export class SampleService {
  create(createSampleInput: CreateSampleInput) {
    return `This action adds a new sample - ${createSampleInput}`;
  }

  findAll() {
    return `This action returns all sample`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sample`;
  }

  update(id: number, updateSampleInput: UpdateSampleInput) {
    return `This action updates a #${id} sample - ${updateSampleInput}`;
  }

  remove(id: number) {
    return `This action removes a #${id} sample`;
  }
}

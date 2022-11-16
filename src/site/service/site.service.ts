import { Injectable } from '@nestjs/common';
import { Site } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

// 데이터 베이스에서 가져오는 모든 작업을 service에서 한다
// prismaservice는 module에 주입해주면 자동으로 설정됨
@Injectable()
export class SiteService {
  constructor(private prismaService: PrismaService) {}

  //전체 조회하기
  async fetchAllSite(): Promise<Site[]> {
    return this.prismaService.site.findMany();
  }

  // 단일데이터 fetch
  async fetchSite(id: number): Promise<Site | null> {
    return this.prismaService.site.findUnique({
      where: { id: Number(id) },
    });
  }

  // 데이터삭제
  async deleteSite(id: number): Promise<Site | null> {
    return this.prismaService.site.delete({
      where: { id: Number(id) },
    });
  }

  async addSite(data: Site): Promise<Site> {
    return this.prismaService.site.create({ data });
  }

  async updateSite(
    id: number,
    title: string,
    content: string,
    done: boolean,
  ): Promise<Site> {
    return this.prismaService.site.update({
      where: { id: Number(id) },
      data: {
        title,
        content,
        done,
      },
    });
  }
}

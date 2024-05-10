package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.DianyingpingjiaDao;
import com.entity.DianyingpingjiaEntity;
import com.service.DianyingpingjiaService;
import com.entity.vo.DianyingpingjiaVO;
import com.entity.view.DianyingpingjiaView;

@Service("dianyingpingjiaService")
public class DianyingpingjiaServiceImpl extends ServiceImpl<DianyingpingjiaDao, DianyingpingjiaEntity> implements DianyingpingjiaService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<DianyingpingjiaEntity> page = this.selectPage(
                new Query<DianyingpingjiaEntity>(params).getPage(),
                new EntityWrapper<DianyingpingjiaEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<DianyingpingjiaEntity> wrapper) {
		  Page<DianyingpingjiaView> page =new Query<DianyingpingjiaView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<DianyingpingjiaVO> selectListVO(Wrapper<DianyingpingjiaEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public DianyingpingjiaVO selectVO(Wrapper<DianyingpingjiaEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<DianyingpingjiaView> selectListView(Wrapper<DianyingpingjiaEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public DianyingpingjiaView selectView(Wrapper<DianyingpingjiaEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

}

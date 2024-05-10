package com.dao;

import com.entity.DianyingpingjiaEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.DianyingpingjiaVO;
import com.entity.view.DianyingpingjiaView;


/**
 * 电影评价
 * 
 * @author 
 * @email 
 * @date 2021-03-24 09:28:06
 */
public interface DianyingpingjiaDao extends BaseMapper<DianyingpingjiaEntity> {
	
	List<DianyingpingjiaVO> selectListVO(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
	
	DianyingpingjiaVO selectVO(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
	
	List<DianyingpingjiaView> selectListView(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);

	List<DianyingpingjiaView> selectListView(Pagination page,@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
	
	DianyingpingjiaView selectView(@Param("ew") Wrapper<DianyingpingjiaEntity> wrapper);
	
}
